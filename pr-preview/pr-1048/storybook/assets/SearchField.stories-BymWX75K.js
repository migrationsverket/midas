import{r as m,f as l,j as t}from"./iframe-DGcUF2qp.js";import{S as d}from"./SearchField-D5V2Za7Z.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DuziJ7TH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BY4jsp46.js";import"./utils-C-g9IEHW.js";import"./useLocalizedStringFormatter-M0xxk-YJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BYywxUeg.js";import"./useFocusRing-C3JE--XH.js";import"./index-Bg1abCEO.js";import"./index-6FNMycov.js";import"./useFormValidation-BkBYuxfH.js";import"./useField-C6LcJdMu.js";import"./Button-9W9ESKk6.js";import"./Hidden-DOf4aCVT.js";import"./number-DfkVkf0F.js";import"./useLabels-BWET_vJS.js";import"./useButton-CxyzWvKY.js";import"./search-DTFFD0kf.js";import"./createLucideIcon-vaKNso9Q.js";import"./ClearButton-CuTB_EQZ.js";import"./Button-BDoKvS7o.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-E6uNiOFA.js";import"./VisuallyHidden-CFai959P.js";import"./x-CQouQTE6.js";import"./FieldError-BuaTWgbZ.js";import"./Text-DL34Z6xI.js";import"./Text-DxpETNh1.js";import"./RSPContexts-DKg32s8o.js";import"./Collection-BHHJS68Q.js";import"./index-9gKA1Giu.js";import"./DragAndDrop-D9IT6Tbv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BY22CEnJ.js";import"./SelectionManager-DN9c7-ZC.js";import"./useEvent-C8sq29ir.js";import"./useDescription-SjgewDGU.js";import"./inertValue-x790djUJ.js";import"./useHighlightSelectionDescription-DHDNWOvz.js";import"./useUpdateEffect-C0_gSjEd.js";import"./ListKeyboardDelegate-D1qTWSED.js";import"./useHasTabbableChild-CjixjnKV.js";import"./Checkbox-DVHteJdL.js";import"./Form-De-D48Sg.js";import"./check-DpZ4Taxh.js";import"./useToggleState-DuWz41tL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
