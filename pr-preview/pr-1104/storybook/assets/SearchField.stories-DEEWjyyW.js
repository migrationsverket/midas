import{r as m,f as l,j as t}from"./iframe-Bm0DrSMO.js";import{S as d}from"./SearchField-DRtbxXHx.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CAKDDzvn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-_TpPhYBA.js";import"./utils-CoM9YHiu.js";import"./useLocalizedStringFormatter-DWI_FIzZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPyJ1gWj.js";import"./useFocusRing-CkTqT8wc.js";import"./index-CFyUkJmM.js";import"./index-CuQSmexf.js";import"./useFormValidation-CCMpRbRk.js";import"./useField-DBy0P2Fr.js";import"./Button-BlmcdTpb.js";import"./Hidden-RcWRgJ8x.js";import"./useLabels-B81GYCN9.js";import"./useButton-BNEnbj2x.js";import"./search-DPj1EYAh.js";import"./createLucideIcon-CUh6klxC.js";import"./ClearButton-D1Yzasjb.js";import"./x-Dbz_bc1H.js";import"./Button-CekYPC-I.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ci4W8RSD.js";import"./VisuallyHidden-B5PU83U6.js";import"./FieldError-CCe7rZes.js";import"./Text-CvUQuXzc.js";import"./Text-BLzt5HZQ.js";import"./RSPContexts-nAfEcYEJ.js";import"./Collection-BAnlV6Ln.js";import"./index-DQ_G-xOK.js";import"./DragAndDrop-Btirk7Dc.js";import"./getScrollParent-D9CIxd-t.js";import"./scrollIntoView-ChcThMc9.js";import"./SelectionIndicator-bnleW8Zx.js";import"./SelectionManager-BJ6XMe41.js";import"./useEvent-Bam-6ZDs.js";import"./useDescription-BgQlQb3M.js";import"./inertValue-CkrNK-DQ.js";import"./useHighlightSelectionDescription-Cd7HBL48.js";import"./useUpdateEffect-DQQghGWZ.js";import"./ListKeyboardDelegate-yZYnbXf1.js";import"./useHasTabbableChild-dAD0uPVw.js";import"./Checkbox-CKLqxTHU.js";import"./Form-XMkLrXkW.js";import"./check-CtSyQMUn.js";import"./useToggleState-CGsF022p.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
