import{r as m,f as l,j as t}from"./iframe-_pn10Gh5.js";import{S as d}from"./SearchField-BacbSqfF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BCDQQJKb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dxs9pDcB.js";import"./clsx-B-dksMZM.js";import"./Form-DbnAgaD0.js";import"./useFocusRing-Du-3sSFw.js";import"./index-Cw5lWwtj.js";import"./index-8X9ryZUF.js";import"./Input-BZw6JaLW.js";import"./Hidden-B59_1jQa.js";import"./Button-BbTH0gim.js";import"./useLabel-G0kMe1Tv.js";import"./useLabels-D2T-Rr0V.js";import"./useButton-C6hhINuJ.js";import"./FieldError-DNAaC6mi.js";import"./Text-CTGKw8zC.js";import"./clsx-Ciqy0D92.js";import"./Text-B6_JfJRz.js";import"./RSPContexts-qi1qSqWJ.js";import"./Group-BYgW5Zr6.js";import"./useControlledState-B3g2_X4G.js";import"./useLocalizedStringFormatter-BPfMaHdV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BvlO1Bso.js";import"./useField-BidYdbaA.js";import"./TextField.module-DdivwlC8.js";import"./search-Df9Hhg_t.js";import"./createLucideIcon-B0iC-DBv.js";import"./x-LrHo8mCt.js";import"./useLocalizedStringFormatter-CE2BIbZN.js";import"./Button-D11fELwQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DrcSE3si.js";import"./Collection-D2dsY8lM.js";import"./index-Bo66yhSK.js";import"./DragAndDrop-BWhZwNPD.js";import"./getScrollParent-0TLzMWVN.js";import"./scrollIntoView-PAGe5JTT.js";import"./SelectionIndicator-qNnmvrpX.js";import"./SelectionManager-4whR5RAS.js";import"./useEvent-DjkDRboI.js";import"./useDescription-BKvd-nfd.js";import"./inertValue-BOJmOaQ4.js";import"./useHighlightSelectionDescription-CLp6-koN.js";import"./useUpdateEffect-BZf2fIT1.js";import"./ListKeyboardDelegate-CQ6Tj1SL.js";import"./useHasTabbableChild-CQCP1WnS.js";import"./Checkbox-DOew_XhB.js";import"./check-BtHqvQ2w.js";import"./useToggleState-DJq0HyD1.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
