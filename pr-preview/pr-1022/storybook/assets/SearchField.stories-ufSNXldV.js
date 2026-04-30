import{r as m,f as l,j as t}from"./iframe-C2VOWNy0.js";import{S as d}from"./SearchField-DWHWB95R.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BtMjFxUx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DL-QRm3L.js";import"./clsx-B-dksMZM.js";import"./Form-DieApCia.js";import"./useFocusRing-tC1N5ZLd.js";import"./index-BznYJ3G3.js";import"./index-HiVmXaez.js";import"./Input-BfCXUBQw.js";import"./Hidden-BpHByyx6.js";import"./Button-MPfMNKtf.js";import"./useLabel-CxUvvvjx.js";import"./useLabels-Szx34EwE.js";import"./useButton-BqHFL3UV.js";import"./FieldError-jk1VrFqC.js";import"./Text-Cxs3PxNa.js";import"./clsx-Ciqy0D92.js";import"./Text-Dp8Xagmv.js";import"./RSPContexts-Cjt7Khrj.js";import"./Group-Cp8FqMk5.js";import"./useControlledState-DnakpviL.js";import"./useLocalizedStringFormatter-BtBT9ZZk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B8e3oCBs.js";import"./useField-Cy-oi4SU.js";import"./TextField.module-DdivwlC8.js";import"./search-uqi8xg-J.js";import"./createLucideIcon-DQ7ZZ5Wg.js";import"./x-DCx4jyMP.js";import"./useLocalizedStringFormatter-BAlXpd6A.js";import"./Button-BlyWqisU.js";import"./Button.module-BFenTVPP.js";import"./VisuallyHidden-B4dPT57A.js";import"./Collection-CHSE8riR.js";import"./index-BoJ_FJwf.js";import"./DragAndDrop-COSOVsih.js";import"./getScrollParent-D2095vKQ.js";import"./scrollIntoView-DdcCNGEe.js";import"./SelectionIndicator-DZy8CkPU.js";import"./SelectionManager-B5yFKVU5.js";import"./useEvent-BuIe4DGB.js";import"./useDescription-DsRwbbxm.js";import"./inertValue-DPp1QjtX.js";import"./useHighlightSelectionDescription-AbmhDplc.js";import"./useUpdateEffect-DHZ4gp8q.js";import"./ListKeyboardDelegate-BSxRmpJD.js";import"./useHasTabbableChild-BuN5EHhD.js";import"./Checkbox-BfHW7bIL.js";import"./check-Cpokd5_1.js";import"./useToggleState-BaMz0np-.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
