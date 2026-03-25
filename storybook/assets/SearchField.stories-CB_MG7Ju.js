import{r as m,f as l,j as t}from"./iframe-CJiLO33n.js";import{S as d}from"./SearchField-DWiNUOf6.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DNHmlKt6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BwIbfVvT.js";import"./clsx-B-dksMZM.js";import"./Form-CzM7f-FM.js";import"./useFocusRing-BwtfOiN2.js";import"./index-DCLVDLzL.js";import"./index-CWQvnVll.js";import"./Input-swurc7cY.js";import"./Hidden-GX2Gt-Bh.js";import"./Button-BPl7GMUn.js";import"./useLabels-CLDCP1oZ.js";import"./useButton-CDfLXD9h.js";import"./FieldError-Dd2S8Fqt.js";import"./Text-Cu_x9kkp.js";import"./clsx-Ciqy0D92.js";import"./Text-B20Rga9k.js";import"./RSPContexts-T3bE05r6.js";import"./Group-BSts2WQT.js";import"./useControlledState-sn3ZKmd0.js";import"./useLocalizedStringFormatter-BwFxFA-j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-EHlUx0Cb.js";import"./useField-BDsDA6Qn.js";import"./TextField.module-DdivwlC8.js";import"./search-CJw8mMxz.js";import"./createLucideIcon-DApbN3tp.js";import"./x-CEEDctr_.js";import"./useLocalizedStringFormatter-CDDiG4UU.js";import"./Button-u-2V4ARC.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DMMbRnDT.js";import"./Collection-j5V17JOV.js";import"./index-B5c10GPd.js";import"./DragAndDrop-DNq_PjIM.js";import"./getScrollParent-CrmutzXr.js";import"./scrollIntoView-CqRJ3xkb.js";import"./SelectionIndicator-DcydaaTe.js";import"./SelectionManager-BGpjjaC5.js";import"./useEvent-B4Mg-F-r.js";import"./useDescription-t2KTHtwf.js";import"./inertValue-BlpyRfls.js";import"./useHighlightSelectionDescription-D9cABIaP.js";import"./useUpdateEffect-BvYo94Rd.js";import"./ListKeyboardDelegate-D0q8X-cK.js";import"./useHasTabbableChild-DdNijWt_.js";import"./Checkbox-zdevZpKY.js";import"./check-Bu5yePmF.js";import"./useToggleState-BzrznYj0.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
