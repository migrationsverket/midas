import{r as m,f as l,j as t}from"./iframe-lVehiq6l.js";import{S as d}from"./SearchField-ISPfnSp9.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dh576fC-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mNJ9Z0MW.js";import"./clsx-B-dksMZM.js";import"./Form-BVTVpFyF.js";import"./useFocusRing--_5FTCU2.js";import"./index-BYr4OlSN.js";import"./index-IBTB5hiH.js";import"./Input-DIC53MXy.js";import"./Hidden-CQ6hLYuq.js";import"./Button-CYmCkrOz.js";import"./useLabel-BJ5LbRsC.js";import"./useLabels-BVtbuBE4.js";import"./useButton-CaovbWyL.js";import"./FieldError-BiJGHbcs.js";import"./Text-BTYS5fVW.js";import"./clsx-Ciqy0D92.js";import"./Text-CB3b7It2.js";import"./RSPContexts-DMhdXzo5.js";import"./Group-Bj39cUw-.js";import"./useControlledState-BySGjGY5.js";import"./useLocalizedStringFormatter-Bj44o9Xo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DubTlxXT.js";import"./useField-C95X0ruH.js";import"./TextField.module-DdivwlC8.js";import"./search-MyojXdV3.js";import"./createLucideIcon-D1OyaQLn.js";import"./x-CCWQlqjq.js";import"./useLocalizedStringFormatter-qtrOBw-Q.js";import"./Button-Dp2V6GGG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C5EMcuEJ.js";import"./Collection-Ctmg3yud.js";import"./index-CKxanYeA.js";import"./DragAndDrop-DtvApnQB.js";import"./getScrollParent-DZNwOYHo.js";import"./scrollIntoView-_wY1R8QT.js";import"./SelectionIndicator-ClMAv9ja.js";import"./SelectionManager-XPna52cV.js";import"./useEvent-E09xkLUE.js";import"./useDescription-CymLEEwh.js";import"./inertValue-PPBuMnjj.js";import"./useHighlightSelectionDescription-CaP-1DT6.js";import"./useUpdateEffect-D2DQ6hng.js";import"./ListKeyboardDelegate-BDeGGVAe.js";import"./useHasTabbableChild-KS8wc3aR.js";import"./Checkbox-BYI8_fI8.js";import"./check-B8SbehGq.js";import"./useToggleState-C-7RgL1P.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
