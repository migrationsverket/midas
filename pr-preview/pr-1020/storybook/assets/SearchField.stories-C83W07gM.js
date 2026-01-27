import{r as m,f as l,j as t}from"./iframe-D6iOFlNk.js";import{S as d}from"./SearchField-CRe_yfDG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-sIijHNVx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DejCxbfT.js";import"./utils-CD1tK_62.js";import"./useLocalizedStringFormatter-BIP2SAND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-X7zOl3Pb.js";import"./useFocusRing-upgm9Lvd.js";import"./index-cK5OqLVZ.js";import"./index-BOUWd1Up.js";import"./useFormValidation-Cs82m8dT.js";import"./useField-BS28cROS.js";import"./Button-B4EeNfOQ.js";import"./Hidden-Cd_aaCcf.js";import"./useLabels-CZQ88t08.js";import"./useButton-84WMXec5.js";import"./search-BC87dLom.js";import"./createLucideIcon-Gwq4fNDs.js";import"./ClearButton-Bfb9KYgw.js";import"./Button-CjctI97I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BAscfSQt.js";import"./VisuallyHidden-CIEzbUDk.js";import"./x-CmRgogil.js";import"./FieldError-BlY0sckk.js";import"./Text-aL4nWdoT.js";import"./Text-D5zoqrMb.js";import"./RSPContexts-BvwPJGsb.js";import"./Collection-BkN69H6H.js";import"./index-zGMbwrwu.js";import"./DragAndDrop-DqSpBkjz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgEE-HPU.js";import"./SelectionManager-C73wsRfe.js";import"./useEvent-ClK_-pLi.js";import"./useDescription-CuOT9qT9.js";import"./inertValue-BK0gRzfl.js";import"./useHighlightSelectionDescription-B98Oz0JC.js";import"./useUpdateEffect-DTEBxJbz.js";import"./ListKeyboardDelegate-BuJFcrKe.js";import"./useHasTabbableChild-CRcsV1ls.js";import"./Checkbox-CVVGYfV7.js";import"./Form-CPEZg61n.js";import"./check-DLCuJ73v.js";import"./useToggleState-BcMORZC_.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
