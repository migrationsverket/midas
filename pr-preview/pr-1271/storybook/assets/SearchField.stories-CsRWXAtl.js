import{r as m,f as l,j as t}from"./iframe-GMyNOJOq.js";import{S as d}from"./SearchField-D4am_-lP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BcgAI_A_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BXbplvrq.js";import"./clsx-B-dksMZM.js";import"./Form-Bt1ZVAUN.js";import"./useFocusRing-CY-YEC5f.js";import"./index-DSCO44yP.js";import"./index-CiecEaAM.js";import"./Input-ByVNz-Ba.js";import"./Hidden-zTZMnLTK.js";import"./Button-BmFFiwR6.js";import"./useLabel-CqPGMRzp.js";import"./useLabels-BBipD7g9.js";import"./useButton-HZCszyxF.js";import"./FieldError-C81FQqBO.js";import"./Text-DwP9uMRl.js";import"./clsx-Ciqy0D92.js";import"./Text-DPFOPtH6.js";import"./RSPContexts-ALCmHzcd.js";import"./Group-C5kGEOYT.js";import"./useControlledState-yUAT-leZ.js";import"./useLocalizedStringFormatter-CslKPgSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CU-cWo7S.js";import"./useField-CA_QjZbA.js";import"./TextField.module-DdivwlC8.js";import"./search-BhVPv_f2.js";import"./createLucideIcon-BTNAcQe3.js";import"./x-CqyquoJ7.js";import"./useLocalizedStringFormatter-DN9P_vz1.js";import"./Button-DiEAaUmX.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DOm6YV-1.js";import"./Collection-DVkjdMjT.js";import"./index-CJyCjhTy.js";import"./DragAndDrop-CDKcbgBJ.js";import"./getScrollParent-9kULsret.js";import"./scrollIntoView-CMEx-M2c.js";import"./SelectionIndicator-C2IpaVjB.js";import"./SelectionManager-D943sEC2.js";import"./useEvent-CBo9AmGw.js";import"./useDescription-CTuGe5IW.js";import"./inertValue-DlgeyaKo.js";import"./useHighlightSelectionDescription-Dhr0atX-.js";import"./useUpdateEffect-C4qSBNTr.js";import"./ListKeyboardDelegate-BFbJBipB.js";import"./useHasTabbableChild-D8naVHoo.js";import"./Checkbox-MM_H0Yc0.js";import"./check-Bl_f2_WN.js";import"./useToggleState-DJMKm7j2.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
