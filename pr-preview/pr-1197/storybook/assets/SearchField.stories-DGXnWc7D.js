import{r as m,f as l,j as t}from"./iframe-DOVonus9.js";import{S as d}from"./SearchField-DmJDXIon.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D9X01qU5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DhPCiJLe.js";import"./clsx-B-dksMZM.js";import"./Form-BdbgD7B8.js";import"./useFocusRing-DFqQelvs.js";import"./index-BXLzhsHf.js";import"./index-DynpYPKw.js";import"./Input-CBiXTxlk.js";import"./Hidden-DMUfuflC.js";import"./Button-Cz99NuPN.js";import"./useLabel-CFmo7f_1.js";import"./useLabels-DhmD3WfL.js";import"./useButton-DPc7CUXt.js";import"./FieldError-B2DyCZVK.js";import"./Text-DFd043ah.js";import"./clsx-Ciqy0D92.js";import"./Text-DX6xJkbU.js";import"./RSPContexts-D5KAyYge.js";import"./Group-BM_cRr_-.js";import"./useControlledState-BPaR75DG.js";import"./useLocalizedStringFormatter-MwIKQJtH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-1111KJFc.js";import"./useField-D5iM5mrG.js";import"./TextField.module-DdivwlC8.js";import"./search-CZ_ZwxPK.js";import"./createLucideIcon-CfE47YAu.js";import"./x-BOgOzpuz.js";import"./useLocalizedStringFormatter-zR7_kec3.js";import"./Button-BMOShfgc.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BveXVc2Y.js";import"./Collection-CVMDa6-Z.js";import"./index-sXvwZxO2.js";import"./DragAndDrop-Cd9lWjEP.js";import"./getScrollParent-UWeFGnXQ.js";import"./scrollIntoView-BxQ_AVGt.js";import"./SelectionIndicator-QWLR05h-.js";import"./SelectionManager-T2xaAnck.js";import"./useEvent-Cvp587Nb.js";import"./useDescription-B5o5KaGQ.js";import"./inertValue-CwCFMR3p.js";import"./useHighlightSelectionDescription-DQy7TBKT.js";import"./useUpdateEffect-CfFVfiAp.js";import"./ListKeyboardDelegate-B3Lsr7h9.js";import"./useHasTabbableChild-D3joeYTV.js";import"./Checkbox-FuHuz0Dm.js";import"./check-FHI0VX2u.js";import"./useToggleState-Dsyxbbo5.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
