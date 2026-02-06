import{r as m,f as l,j as t}from"./iframe-D9Rzgh85.js";import{S as d}from"./SearchField-CxqV28a4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DQH2cW35.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJh_WJgv.js";import"./utils-CcE3691I.js";import"./useLocalizedStringFormatter-Dq7J19BW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D11QcTuD.js";import"./useFocusRing-qy6wHmp4.js";import"./index-DmQawtna.js";import"./index-BrMoY6nn.js";import"./useFormValidation-COs17kb9.js";import"./useField-ERXTV_bg.js";import"./Button-D5VXQBoK.js";import"./Hidden-CRl_n9Jn.js";import"./useLabels-nvjoqgK_.js";import"./useButton-C4LQsEB7.js";import"./search-geywf33l.js";import"./createLucideIcon-Cr-DKDH9.js";import"./ClearButton-VYgfedPz.js";import"./Button-GEwt1th_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DjQyT7Ji.js";import"./VisuallyHidden-DYBD2kzd.js";import"./x-DysO00qF.js";import"./FieldError-CIzKS9xI.js";import"./Text-3qget8RN.js";import"./Text-Dd2X_hQM.js";import"./RSPContexts-BGjvgK0i.js";import"./Collection-DMed_n8m.js";import"./index-HofzEjLI.js";import"./DragAndDrop-BwZTndVs.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D5vxYoQH.js";import"./SelectionManager-CQQ-Z0Yf.js";import"./useEvent-Ckf4GrX8.js";import"./useDescription-BM34yKeA.js";import"./inertValue-CdmXLuUO.js";import"./useHighlightSelectionDescription-OIzlzQud.js";import"./useUpdateEffect-C71n-Tjr.js";import"./ListKeyboardDelegate-1FTpva9b.js";import"./useHasTabbableChild-BjnpMqbB.js";import"./Checkbox-BxJ6kTAX.js";import"./Form-CRKWl6Li.js";import"./check-BNbITDRN.js";import"./useToggleState-mu75BpDn.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
