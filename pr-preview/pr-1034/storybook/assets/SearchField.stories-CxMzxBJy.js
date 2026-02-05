import{r as m,f as l,j as t}from"./iframe-DgMSVBJj.js";import{S as d}from"./SearchField-Bu1Z9PZc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BJUOsu31.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKuwHYa2.js";import"./utils-BUVZQFkZ.js";import"./useLocalizedStringFormatter-CKARZmxO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-JEfR7FTO.js";import"./useFocusRing-CSYGle8_.js";import"./index-Ch5SRSet.js";import"./index-Cm4xQ_Xl.js";import"./useFormValidation-k09FZdMi.js";import"./useField-B4BmtOyh.js";import"./Button-D-J1jvHp.js";import"./Hidden-B0_wOBGj.js";import"./useLabels-elaTIo4h.js";import"./useButton-XlQwCmfH.js";import"./search-wXjRf_75.js";import"./createLucideIcon-xbipfE59.js";import"./ClearButton-BTxVQeHB.js";import"./Button-Cx_rtnFw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CHl2-VBK.js";import"./VisuallyHidden-MCla8tVA.js";import"./x-PtDtzKM-.js";import"./FieldError-DhkdCeIN.js";import"./Text-C3v5M0X6.js";import"./Text-D4BWFKQS.js";import"./RSPContexts-GwS0uMKq.js";import"./Collection-Dx95RUAw.js";import"./index-ByCdYvx5.js";import"./DragAndDrop-D-qwsIil.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bv7832s7.js";import"./SelectionManager-D8ya2Y1V.js";import"./useEvent-CKIQixox.js";import"./useDescription-C3jZSQWL.js";import"./inertValue-Bj1IViAP.js";import"./useHighlightSelectionDescription-C9WWTr_-.js";import"./useUpdateEffect-DUIi_A7d.js";import"./ListKeyboardDelegate-Besye-xt.js";import"./useHasTabbableChild-DrwESLJ6.js";import"./Checkbox-CZClZBxi.js";import"./Form-B7h5JGfO.js";import"./check-Dyi7NhJJ.js";import"./useToggleState-DH3QGZJ6.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
