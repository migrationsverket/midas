import{r as m,f as l,j as t}from"./iframe-BEKS4YDN.js";import{S as d}from"./SearchField-KVEkbXfz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-xu1yLRVg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-xO_879NF.js";import"./clsx-B-dksMZM.js";import"./Form-DjNnpm5_.js";import"./useFocusRing-BhpyH7yS.js";import"./index-C_TP6Ur2.js";import"./index-CEolt4Rx.js";import"./Input-B11ZsO07.js";import"./Hidden-CwtVgZCk.js";import"./Button-BPvFIvh-.js";import"./useLabel-CSn61wWa.js";import"./useLabels-BHkcg4nS.js";import"./useButton-BxOD9fvd.js";import"./FieldError-C9IlqVU0.js";import"./Text-BZzeA2Vt.js";import"./clsx-Ciqy0D92.js";import"./Text-BfCSkgj0.js";import"./RSPContexts-CZte2gii.js";import"./Group-Cl_l4hHo.js";import"./useControlledState-BJkUh9eQ.js";import"./useLocalizedStringFormatter-Ch_NtsBU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CkwzA_HM.js";import"./useField-H9rBq9I8.js";import"./TextField.module-DdivwlC8.js";import"./search-DsDb65IF.js";import"./createLucideIcon-BWz3rFdE.js";import"./x-DI99KDwB.js";import"./useLocalizedStringFormatter-CYPaady4.js";import"./Button-D3aX5HrM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DHkZrGra.js";import"./Collection-BNCTK-zC.js";import"./index-DQpkWmHs.js";import"./DragAndDrop-DSuBhKkO.js";import"./getScrollParent-Dd6uns12.js";import"./scrollIntoView-Bhjt-fS-.js";import"./SelectionIndicator-BFx5J5a6.js";import"./SelectionManager-BonK-rJX.js";import"./useEvent-h3u_uwpJ.js";import"./useDescription-qyRNVaLw.js";import"./inertValue-Cv0c-4zv.js";import"./useHighlightSelectionDescription-BtoTXgxK.js";import"./useUpdateEffect-Bdd-xjla.js";import"./ListKeyboardDelegate-D2QwNFZw.js";import"./useHasTabbableChild-D0ZfXZYW.js";import"./Checkbox-CoL3NPOi.js";import"./check-C55VPzFA.js";import"./useToggleState-Qn09JngU.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
