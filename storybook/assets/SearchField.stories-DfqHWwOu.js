import{r as m,f as l,j as t}from"./iframe-DG7j_jog.js";import{S as d}from"./SearchField-DQgxRKmF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-COtwXA1q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DlqTy2YG.js";import"./clsx-B-dksMZM.js";import"./Form-D8vhhRij.js";import"./useFocusRing-CVU8iu1p.js";import"./index-D_RAWMYY.js";import"./index-6UXGLZBQ.js";import"./Input-Dd5m--iu.js";import"./Hidden-C_hvN9In.js";import"./Button-BXZJnhMA.js";import"./useLabel-C_5Blhsu.js";import"./useLabels-DqxGA6IW.js";import"./useButton-CBCUfkJC.js";import"./FieldError-Jed7qGAw.js";import"./Text-qxRWFYP_.js";import"./clsx-Ciqy0D92.js";import"./Text-BYthEMg3.js";import"./RSPContexts-Dpj1kihF.js";import"./Group-BVfLijgn.js";import"./useControlledState-D0o-1ht4.js";import"./useLocalizedStringFormatter-Cy6w6_S0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0DEaxu-.js";import"./useField-NmEqGXbM.js";import"./TextField.module-DdivwlC8.js";import"./search-Cifgw-FB.js";import"./createLucideIcon-DciogvgI.js";import"./x-XMY5sYEL.js";import"./useLocalizedStringFormatter-C5OlVKSb.js";import"./Button-KUvfLJ-A.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DFIbjjfa.js";import"./Collection-BUv_wNfi.js";import"./index-DyWbixMj.js";import"./DragAndDrop-Q66dtIuY.js";import"./getScrollParent-BNyZCVqh.js";import"./scrollIntoView-BjyHJlah.js";import"./SelectionIndicator-BfpTMdkJ.js";import"./SelectionManager-DqpIm14G.js";import"./useEvent-DfWqyckn.js";import"./useDescription-C3vr3r7Y.js";import"./inertValue-CEiT5r-W.js";import"./useHighlightSelectionDescription-D7NpTWgN.js";import"./useUpdateEffect-B4hi1Hnu.js";import"./ListKeyboardDelegate-CIjDbHgv.js";import"./useHasTabbableChild-Cq6n8YpW.js";import"./Checkbox-fZLPiyq_.js";import"./check-Dj3ll4xw.js";import"./useToggleState-CzZ6s7RW.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
