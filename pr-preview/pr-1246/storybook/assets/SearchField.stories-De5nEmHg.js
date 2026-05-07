import{r as m,f as l,j as t}from"./iframe-CkvNFrYQ.js";import{S as d}from"./SearchField-BSyFTehY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dqw39DR_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgwUMJBy.js";import"./clsx-B-dksMZM.js";import"./Form-CWYzH3eB.js";import"./useFocusRing-DW5q3Sep.js";import"./index-yTWTeOs4.js";import"./index-exdkySs-.js";import"./Input-D72VaGU6.js";import"./Hidden-Bsx77DlA.js";import"./Button-vUvfAWls.js";import"./useLabel-MkwggAPL.js";import"./useLabels-CL_FLL5j.js";import"./useButton-CJQ9IXaE.js";import"./FieldError-BN50R8Gs.js";import"./Text-DIpvUzoX.js";import"./clsx-Ciqy0D92.js";import"./Text-DsB1bVac.js";import"./RSPContexts-DGIABOWW.js";import"./Group-C9L071lP.js";import"./useControlledState-Dmid9ay2.js";import"./useLocalizedStringFormatter-DSoEqpDY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B4kTnNrI.js";import"./useField-C89JW0cR.js";import"./TextField.module-DdivwlC8.js";import"./search-Bq9AL0KP.js";import"./createLucideIcon-CeEwKqzx.js";import"./x-DsRbZUfb.js";import"./useLocalizedStringFormatter-V6FZSm6s.js";import"./Button-D17vaezS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DC7QTvoq.js";import"./Collection-B_3MCUvb.js";import"./index-TiB-bmTE.js";import"./DragAndDrop-Ct342tjl.js";import"./getScrollParent-Dj3KhtFY.js";import"./scrollIntoView-CCwmtkiF.js";import"./SelectionIndicator-U0aQAuvT.js";import"./SelectionManager-BSCYUInq.js";import"./useEvent-DbWchgAK.js";import"./useDescription-CapqPYkv.js";import"./inertValue-BZ5WLW1k.js";import"./useHighlightSelectionDescription-C5OpJZrd.js";import"./useUpdateEffect-Hr8RCabG.js";import"./ListKeyboardDelegate-BEgF-Rly.js";import"./useHasTabbableChild-DJZB_qp-.js";import"./Checkbox-BjDCCwZt.js";import"./check-CejbZSkD.js";import"./useToggleState-8XREYqB5.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
