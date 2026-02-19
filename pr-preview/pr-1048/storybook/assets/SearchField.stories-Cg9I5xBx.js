import{r as m,f as l,j as t}from"./iframe-DvfEE2EA.js";import{S as d}from"./SearchField-DaoqU7bs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DdlVOq6R.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BMOgnCDq.js";import"./utils-EccCoJST.js";import"./useLocalizedStringFormatter-7gPqsvUW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bw36CqRH.js";import"./useFocusRing-DvRoLobF.js";import"./index-C-FPbYY0.js";import"./index-C-7AJHKG.js";import"./useFormValidation-BV0cpNq4.js";import"./useField-DtIRcX32.js";import"./Button-BEsFQT6R.js";import"./Hidden-E4LKVjJ3.js";import"./number-DfkVkf0F.js";import"./useLabels-BDWRbz34.js";import"./useButton-Cby6Hv6a.js";import"./search-_qwJzLLC.js";import"./createLucideIcon-BJb0Fm1J.js";import"./ClearButton-r9QQzP8O.js";import"./Button-CA8_LeWe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CdetPKX0.js";import"./VisuallyHidden-DJTtwLDL.js";import"./x-DwluPr-j.js";import"./FieldError-DJlVVmti.js";import"./Text-CYxj4XUp.js";import"./Text-JM8wZQts.js";import"./RSPContexts-BybK4INx.js";import"./Collection-CZl-6v5x.js";import"./index-BlYdPTc5.js";import"./DragAndDrop-DDb4Qli4.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CfqI11BI.js";import"./SelectionManager-DBVqzXni.js";import"./useEvent-Dt-7Obwe.js";import"./useDescription-BHTjELwq.js";import"./inertValue-C9_UBnpU.js";import"./useHighlightSelectionDescription-D3u7_QtK.js";import"./useUpdateEffect-hMT7ev8Z.js";import"./ListKeyboardDelegate-BTNuIJ29.js";import"./useHasTabbableChild-C_fbwP6Q.js";import"./Checkbox-Djy2hD9Q.js";import"./Form-CACDamyx.js";import"./check-pdTOHOtg.js";import"./useToggleState-CNA36ZkH.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
