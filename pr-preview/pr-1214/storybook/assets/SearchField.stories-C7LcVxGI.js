import{r as m,i as l,j as t}from"./iframe-B22LvWbW.js";import{S as d}from"./SearchField-SuUOiDf-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-R_U-HUc7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoCAfGQj.js";import"./clsx-B-dksMZM.js";import"./Form-loZ3Ref_.js";import"./useFocusRing-COZ-KdCj.js";import"./index-COlz_oEn.js";import"./index-Ce19_x3I.js";import"./Input-CAiTMh7r.js";import"./Hidden-BOXGnL4u.js";import"./Button-DKfTRRv_.js";import"./useLabel-BMEjxuHj.js";import"./useLabels-CG8ZEWvO.js";import"./useButton-D-9O1J5B.js";import"./FieldError-CaBPVaas.js";import"./Text-igIwftJt.js";import"./clsx-Ciqy0D92.js";import"./Text-C_6Wg08c.js";import"./RSPContexts-C7KIxgyf.js";import"./Group-BQeFUN6h.js";import"./useControlledState-IKfTJ6C0.js";import"./useLocalizedStringFormatter-Cax5_603.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CfmZtV3A.js";import"./useField-CuA4l6HP.js";import"./TextField.module-DdivwlC8.js";import"./search-D3bAawYh.js";import"./createLucideIcon-B8tzovcT.js";import"./x-Dgd0H-9L.js";import"./useLocalizedStringFormatter-Bx-OZ9xC.js";import"./Button-sJK-n8WP.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BkHBxjny.js";import"./Collection-CdjXBLNw.js";import"./index-DuOmNTUm.js";import"./DragAndDrop-CIUPioJz.js";import"./getScrollParent-BHXVU5eY.js";import"./scrollIntoView-7H8hj9e6.js";import"./SelectionIndicator-BOQ4NAlt.js";import"./SelectionManager-CsU5-DFp.js";import"./useEvent-DcI05E6D.js";import"./useDescription-CWKmEZRS.js";import"./inertValue-DEA33J58.js";import"./useHighlightSelectionDescription-dKShnJz0.js";import"./useUpdateEffect-CbOYgt9h.js";import"./ListKeyboardDelegate-BeR0xWC1.js";import"./useHasTabbableChild-BGBNSAoM.js";import"./Checkbox-DL9YDRId.js";import"./check-B-eU4E6k.js";import"./useToggleState-DMB_HjcX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
