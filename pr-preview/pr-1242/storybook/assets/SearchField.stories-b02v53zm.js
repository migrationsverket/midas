import{r as m,f as l,j as t}from"./iframe-CcoWXO6B.js";import{S as d}from"./SearchField-B_6JI1zF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Buy2X1Ig.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CvmzGVmn.js";import"./clsx-B-dksMZM.js";import"./Form-JzoeJJ8G.js";import"./useFocusRing-G8rwOJ76.js";import"./index-C0yg_Dj0.js";import"./index-CfJimmGR.js";import"./Input-PZkAC2eI.js";import"./Hidden-CvcA5WHf.js";import"./Button-CqtDw1Oq.js";import"./useLabel-CGCEMESv.js";import"./useLabels-soLHUhGS.js";import"./useButton-Tnb7auBt.js";import"./FieldError-C7pmBmh_.js";import"./Text-C1aI8N19.js";import"./clsx-Ciqy0D92.js";import"./Text-_y8SHX-J.js";import"./RSPContexts-2FrTYNtF.js";import"./Group-Co4Z1JTg.js";import"./useControlledState-6QHQ6cmR.js";import"./useLocalizedStringFormatter-BR6J7xDD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-By0xorr9.js";import"./useField-DGwwU4v2.js";import"./TextField.module-DdivwlC8.js";import"./search-DD5w_GDm.js";import"./createLucideIcon-CUodyQE8.js";import"./x-CN2QjC-O.js";import"./useLocalizedStringFormatter-DhaaJ_kE.js";import"./Button-tDMUeh37.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D34CPKZD.js";import"./Collection-Csy7u5cV.js";import"./index-BYbSV4b0.js";import"./DragAndDrop-CkNMLaai.js";import"./getScrollParent-CrWEQW42.js";import"./scrollIntoView-DAiNmZGo.js";import"./SelectionIndicator-Cv50w2_h.js";import"./SelectionManager-BsDWfXhd.js";import"./useEvent-HAa0P1KD.js";import"./useDescription-YzAHNiST.js";import"./inertValue-BJd9ngPB.js";import"./useHighlightSelectionDescription-ByND_0OQ.js";import"./useUpdateEffect-DkvOqvkp.js";import"./ListKeyboardDelegate-BRi_rYns.js";import"./useHasTabbableChild-CBvfQcK-.js";import"./Checkbox-kpC1Tfng.js";import"./check-Q5_RgS4y.js";import"./useToggleState-DvDscc3U.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
