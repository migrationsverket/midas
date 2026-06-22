import{r as m,f as l,j as t}from"./iframe-BdqauXPx.js";import{S as d}from"./SearchField-DG0NHBaR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BO81-ikv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-TjQiWSfv.js";import"./clsx-B-dksMZM.js";import"./Form-Bsw9pKS8.js";import"./useFocusRing-Djhyctp1.js";import"./index-D26i6JtP.js";import"./index-Ce5gVXXA.js";import"./Input-DFZxFk2j.js";import"./Hidden-D68chLs-.js";import"./Button-BdENfSlN.js";import"./useLabel-MUMZQ-th.js";import"./useLabels-BB2v9ziq.js";import"./useButton-C2K4Azrm.js";import"./FieldError-DGaJEWvC.js";import"./Text-BL07whN_.js";import"./clsx-Ciqy0D92.js";import"./Text-Cb3R__HW.js";import"./RSPContexts-DWJwZTPK.js";import"./Group-DAsAupNi.js";import"./useControlledState-BqbfbBFv.js";import"./useLocalizedStringFormatter-BItpsgj9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CyrS5BG0.js";import"./useField-C7HioUHP.js";import"./TextField.module-DdivwlC8.js";import"./search-DqjfV4M2.js";import"./createLucideIcon-BaaLPnxs.js";import"./x-CmpCUEVG.js";import"./useLocalizedStringFormatter-D8pBRmub.js";import"./Button-lQ7FTiYx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-d4YRXwAI.js";import"./Collection-JvjnwjmG.js";import"./index-BS8HcPx6.js";import"./DragAndDrop-CfOVhm88.js";import"./getScrollParent-H79fyDJz.js";import"./scrollIntoView-jrzWWzlM.js";import"./SelectionIndicator-DT1mAUJL.js";import"./SelectionManager-C6Y-w3s-.js";import"./useEvent-DExcb2G1.js";import"./useDescription-t_eySs42.js";import"./inertValue-BrRpBS-R.js";import"./useHighlightSelectionDescription-Beji8SQD.js";import"./useUpdateEffect-Bsb1Gk4E.js";import"./ListKeyboardDelegate-BhDiJ6PN.js";import"./useHasTabbableChild-DRS95lGL.js";import"./Checkbox-D_TaEQOj.js";import"./check-DX4_yozZ.js";import"./useToggleState-BjvLjD6y.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
