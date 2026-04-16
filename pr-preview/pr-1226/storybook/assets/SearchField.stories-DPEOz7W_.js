import{r as m,f as l,j as t}from"./iframe-D3lvYj-7.js";import{S as d}from"./SearchField-Obk4Zctr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CnnILR-b.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B6k7vEYH.js";import"./clsx-B-dksMZM.js";import"./Form-4L_iZXM_.js";import"./useFocusRing-DIwykGm6.js";import"./index-BM1vPyr1.js";import"./index-DIXJvTpR.js";import"./Input-VS8Iv2KC.js";import"./Hidden-DPjLOd6z.js";import"./Button-DOFXZV3V.js";import"./useLabel-Pnrma__y.js";import"./useLabels-CJIv4d2A.js";import"./useButton-Dbna9MqX.js";import"./FieldError-BIzYN5TD.js";import"./Text-DdkQbCnP.js";import"./clsx-Ciqy0D92.js";import"./Text-CEj93Me_.js";import"./RSPContexts-D64MNSpQ.js";import"./Group-BBq_h1pv.js";import"./useControlledState-D5Ejjxkh.js";import"./useLocalizedStringFormatter-ZyPAj94C.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxvlnZhk.js";import"./useField-Cs7O-1i7.js";import"./TextField.module-DdivwlC8.js";import"./search-Bsf6YM5h.js";import"./createLucideIcon-C2BZ0Xjj.js";import"./x-MTUjWktr.js";import"./useLocalizedStringFormatter-Dn72RgHJ.js";import"./Button-DrsIbXth.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-a__j3MRh.js";import"./Collection-BOvFszMS.js";import"./index-B85edBw8.js";import"./DragAndDrop-DnNtPCqa.js";import"./getScrollParent-D1A9VXvD.js";import"./scrollIntoView-DNnNX0kR.js";import"./SelectionIndicator-DcD7m-kE.js";import"./SelectionManager-CfXrYRZg.js";import"./useEvent-oTCry49G.js";import"./useDescription-CYl_TCbf.js";import"./inertValue-CKZPUubI.js";import"./useHighlightSelectionDescription-CoFNx0bp.js";import"./useUpdateEffect-DCYzTRMy.js";import"./ListKeyboardDelegate-CnmqKvjx.js";import"./useHasTabbableChild-DG9ySRJ8.js";import"./Checkbox-CODgiQs2.js";import"./check-Bx_aZw_E.js";import"./useToggleState-pz6SXR7Y.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
