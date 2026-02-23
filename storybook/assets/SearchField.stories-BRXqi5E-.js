import{r as m,f as l,j as t}from"./iframe-Cbh3F7pN.js";import{S as d}from"./SearchField-Knskfsei.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-wCES9x13.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-uXXYD64-.js";import"./utils-B6nDWoar.js";import"./useLocalizedStringFormatter-BVvUHgZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5b4c9ob.js";import"./useFocusRing-B0tiiTm0.js";import"./index-DKv0hklz.js";import"./index-PVDloiUR.js";import"./useFormValidation-ywxX9cB6.js";import"./useField-Y78HnPPL.js";import"./Button-DEZpBGis.js";import"./Hidden-TWGzSEdN.js";import"./useLabels-CQRwDIC4.js";import"./useButton-XVEb300a.js";import"./search-BUSb9S0a.js";import"./createLucideIcon-CTZlH8w0.js";import"./ClearButton-BN_kqERe.js";import"./Button-C16sAu0x.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CZ4FMEFa.js";import"./VisuallyHidden-BEwci_em.js";import"./x-8XS1xjRr.js";import"./FieldError-CYIfSeeW.js";import"./Text-CjLYei0G.js";import"./Text-CQjCgd7X.js";import"./RSPContexts-O6tGUrPW.js";import"./Collection-DpkgL1my.js";import"./index-DwzPVi1E.js";import"./DragAndDrop-CW-H0wCv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DdxHF7Bz.js";import"./SelectionManager-H9GNwxSP.js";import"./useEvent-D9_S7x3K.js";import"./useDescription-zk1PbWHN.js";import"./inertValue-zmiv4s5s.js";import"./useHighlightSelectionDescription-_SevAqfX.js";import"./useUpdateEffect-CCusyCQu.js";import"./ListKeyboardDelegate-D9VA6qHb.js";import"./useHasTabbableChild-DJP6pePk.js";import"./Checkbox-B_3uCnBt.js";import"./Form-Byqdk1s5.js";import"./check-DMgQl8IR.js";import"./useToggleState-Dqms9YZl.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
