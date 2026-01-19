import{r as m,f as l,j as t}from"./iframe-Cni-JKW8.js";import{S as d}from"./SearchField-hnPXpYqp.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CXWwGUFP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bv7XzANZ.js";import"./utils-BBgPw1Ze.js";import"./useLocalizedStringFormatter-CLIXHxcQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Btzc2t-U.js";import"./useFocusRing-ecgGW1pG.js";import"./index-CCUYZc-T.js";import"./index-BOJ7Xdv4.js";import"./useFormValidation-CuaWKPta.js";import"./useField-BrqrTpzE.js";import"./Button-XWhDywVU.js";import"./Hidden-BMEQANNf.js";import"./useLabels-CIS6hw6Q.js";import"./useButton-nRwKGbmO.js";import"./search-CDS_od0b.js";import"./createLucideIcon-Bi-qWE7K.js";import"./ClearButton-CmkUq0i_.js";import"./Button-CLd0MwQu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhGbBMSU.js";import"./VisuallyHidden-D3ce5_bP.js";import"./x-Bt2kzMmd.js";import"./FieldError-C2WkJOys.js";import"./Text-BaLCHv3_.js";import"./Text-DfMa_H_z.js";import"./RSPContexts-CiH3wnY5.js";import"./Collection-BpA7MK-p.js";import"./index-Cf1Dkp8E.js";import"./DragAndDrop-CnygJsHt.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BErY5zrN.js";import"./SelectionManager-Cm6dwClz.js";import"./useEvent-CYtTP2RX.js";import"./useDescription-BCfpUS-d.js";import"./inertValue-BUaVIzzt.js";import"./useHighlightSelectionDescription-C7ekZPGH.js";import"./useUpdateEffect-CuKKDA6c.js";import"./ListKeyboardDelegate-xFsANkrP.js";import"./useHasTabbableChild-BEIHh3jV.js";import"./Checkbox-vfrbgKtR.js";import"./Form-ClxX9OD4.js";import"./check-Fb-tfZRs.js";import"./useToggleState-DHtl7u9o.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
