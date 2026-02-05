import{r as m,f as l,j as t}from"./iframe-CXofTh8m.js";import{S as d}from"./SearchField-BZvbzC67.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D4YT7rtT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C-iEYIDx.js";import"./utils-CcPRcp3b.js";import"./useLocalizedStringFormatter-B_DAMmIe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CMebTn5t.js";import"./useFocusRing-pwOFYrMc.js";import"./index-DgWjWihD.js";import"./index-DTbcmjmi.js";import"./useFormValidation-BkJ0C1px.js";import"./useField-CnOA2Ga6.js";import"./Button-Bg0rgDPQ.js";import"./Hidden-lT_vOSHT.js";import"./useLabels-Cee1PGsE.js";import"./useButton-Cf-orZyu.js";import"./search-BdPq3i7C.js";import"./createLucideIcon-BzjseAjj.js";import"./ClearButton-lCKYWw_W.js";import"./Button-CYd-XZXb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Do3rSOLA.js";import"./VisuallyHidden-Dc5QJa4d.js";import"./x-Brxl_cXa.js";import"./FieldError-gHbQTmmY.js";import"./Text-Dfh94ZCo.js";import"./Text-js5dDMWg.js";import"./RSPContexts-uhIJKHog.js";import"./Collection-Dpq18B-4.js";import"./index-CIc5rVh6.js";import"./DragAndDrop-D2b3Tl1l.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BCKvqx3C.js";import"./SelectionManager-rdPtBlc1.js";import"./useEvent-Dwblxo1q.js";import"./useDescription-VWMzRdkS.js";import"./inertValue-CN4QxEHJ.js";import"./useHighlightSelectionDescription-CLN9cORg.js";import"./useUpdateEffect-B0q66yfx.js";import"./ListKeyboardDelegate-DmOfKD5W.js";import"./useHasTabbableChild-D6d-oCxf.js";import"./Checkbox-BX3v7qJ4.js";import"./Form-DbR0xU2Q.js";import"./check-BZFKNd9h.js";import"./useToggleState-Bm3enLGw.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
