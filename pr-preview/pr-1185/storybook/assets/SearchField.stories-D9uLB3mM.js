import{r as m,f as l,j as t}from"./iframe-BpREUp_n.js";import{S as d}from"./SearchField-B6GBqrjG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B4lXjsxC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5mnyh4pq.js";import"./clsx-B-dksMZM.js";import"./Form-B8iHgesv.js";import"./useFocusRing-Di2Wci7-.js";import"./index-CHND_S8B.js";import"./index-DHEjYkx-.js";import"./Input-CZWY6zwc.js";import"./Hidden-C8ihGYRf.js";import"./Button-B1ymHcEs.js";import"./useLabel-Wrhj3pEV.js";import"./useLabels-Bs18rTxZ.js";import"./useButton-BeSKsTxR.js";import"./FieldError-CiitnuL9.js";import"./Text-BIdbVrWu.js";import"./clsx-Ciqy0D92.js";import"./Text-C8nfs_6S.js";import"./RSPContexts-sGTMeP-x.js";import"./Group-CQ92ShbK.js";import"./useControlledState-DKT2uJC_.js";import"./useLocalizedStringFormatter-DRmhaeY7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DTJ3vR9b.js";import"./useField-CfVPzfjM.js";import"./TextField.module-DdivwlC8.js";import"./search-BiZztc6a.js";import"./createLucideIcon-Bp1NIHzV.js";import"./x-Dwm5AF8c.js";import"./useLocalizedStringFormatter-BRvvA8cH.js";import"./Button-B5TSA_w8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BSeLhscq.js";import"./Collection-BlAMVWTX.js";import"./index-CtCvV0Wr.js";import"./DragAndDrop-CL5wg-Nd.js";import"./getScrollParent-DtMjsZPo.js";import"./scrollIntoView-BUWi5Scx.js";import"./SelectionIndicator-YXo9fFHY.js";import"./SelectionManager-bqm_yQ00.js";import"./useEvent-CddQ6mLp.js";import"./useDescription-CzljX0gb.js";import"./inertValue-CPW5prnz.js";import"./useHighlightSelectionDescription-Bd3ljeNM.js";import"./useUpdateEffect-Bftdioqq.js";import"./ListKeyboardDelegate-BeX9sJs6.js";import"./useHasTabbableChild-nkswpvV7.js";import"./Checkbox-DT0FCoE3.js";import"./check-BD_3RDK-.js";import"./useToggleState-CoFiCmCV.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
