import{r as m,f as l,j as t}from"./iframe-aJfE6oy0.js";import{S as d}from"./SearchField-QaXY0flr.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ByeqLGj3.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-COacjnfx.js";import"./clsx-B-dksMZM.js";import"./Form-DCHTbw_J.js";import"./useFocusRing-ClTA_ULX.js";import"./index-B_9hsNIp.js";import"./index-Nx_fUc0r.js";import"./Input-CJaHd5ka.js";import"./Hidden-ijM5UvIg.js";import"./Button-gsjvyy6J.js";import"./useLabel-BO6GqdSt.js";import"./useLabels-Jql3WVtl.js";import"./useButton-Bp12HEqD.js";import"./FieldError-BZPifAC7.js";import"./Text-CBxYHQaa.js";import"./clsx-Ciqy0D92.js";import"./Text-CjkYZ3Fr.js";import"./RSPContexts-9F0yhmI5.js";import"./Group-Sj8qFFJW.js";import"./useControlledState-y9DEv0LS.js";import"./useLocalizedStringFormatter--tqgw_C7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIVkaC_L.js";import"./useField-BuwSGg-D.js";import"./TextField.module-DdivwlC8.js";import"./search-q9D2Bc9o.js";import"./createLucideIcon-CHcVE9D4.js";import"./x-a-leTFOM.js";import"./useLocalizedStringFormatter-CUSht9QP.js";import"./Button-DTBmOwE-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5b4EtUm.js";import"./Collection-t5JwsPxx.js";import"./index-C4iPrJ7t.js";import"./DragAndDrop-DJ7FDm_j.js";import"./getScrollParent-C89CZMJK.js";import"./scrollIntoView-CNAiIIsG.js";import"./SelectionIndicator-2xUxav39.js";import"./SelectionManager-DbwSoSAB.js";import"./useEvent-BKCPZ-HL.js";import"./useDescription-DS9x0_tx.js";import"./inertValue-DLqqQ2r9.js";import"./useHighlightSelectionDescription-D-e1cuP8.js";import"./useUpdateEffect-C_LKVmj0.js";import"./ListKeyboardDelegate-BJy3xEaG.js";import"./useHasTabbableChild-UsIrr8D_.js";import"./Checkbox-BYvS4zLx.js";import"./check-26zGa1yI.js";import"./useToggleState-BMrc-zSz.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
