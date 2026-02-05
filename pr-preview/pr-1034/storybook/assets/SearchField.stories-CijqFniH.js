import{r as m,f as l,j as t}from"./iframe-JaJw4f7V.js";import{S as d}from"./SearchField-Dm9LEjFu.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DC56QUx8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C32RUdaE.js";import"./utils-CiBzJ336.js";import"./useLocalizedStringFormatter-Brc7ObIZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-FQoj7CiH.js";import"./useFocusRing-UFPGKc_I.js";import"./index-Cz39_mtL.js";import"./index-B3G3P3vm.js";import"./useFormValidation-BUCZo95t.js";import"./useField-CxzyvlHo.js";import"./Button-BNgll4Za.js";import"./Hidden-D0Dtcxd_.js";import"./useLabels-K8RTE3y-.js";import"./useButton-C_Iz2y8G.js";import"./search-B8msUKMd.js";import"./createLucideIcon-Ct39Qqpq.js";import"./ClearButton-BhKBWnQ7.js";import"./Button-CEh1IEm-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGp_mLDv.js";import"./VisuallyHidden-C0JdxdWR.js";import"./x-CYOQLw97.js";import"./FieldError-LdU8dMtl.js";import"./Text-BS3Ivz4K.js";import"./Text-DKa2NLkX.js";import"./RSPContexts-L3Du4l0W.js";import"./Collection-CiQe6VOS.js";import"./index-gOh7a-g6.js";import"./DragAndDrop-bRQf8eyt.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B9K3UV_S.js";import"./SelectionManager-DUjG5DsX.js";import"./useEvent-DlS508sr.js";import"./useDescription-DImf0UX5.js";import"./inertValue-BYU27VvX.js";import"./useHighlightSelectionDescription-nQ7k1lZr.js";import"./useUpdateEffect-BLC0Lz13.js";import"./ListKeyboardDelegate-DiKlfXRL.js";import"./useHasTabbableChild-C4hNjGph.js";import"./Checkbox-fH2Sr-ln.js";import"./Form-C2RsKPnO.js";import"./check-Dd7Zfm8U.js";import"./useToggleState-hNMg8iN5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
