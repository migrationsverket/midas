import{r as m,f as l,j as t}from"./iframe-BUyds97o.js";import{S as d}from"./SearchField-BDQAnVr_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CGC82Ehq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-BE9Ip_bu.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dk1B153b.js";import"./utils-BPu6xsrW.js";import"./useLocalizedStringFormatter-DVo_dtBE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C9N0NVGh.js";import"./useFocusRing-Bm-8HNv9.js";import"./index-511sCdBp.js";import"./index-jhER429G.js";import"./useFormValidation-DsGu4ICd.js";import"./useField-C5IKysth.js";import"./Button-HXR-7m9h.js";import"./Hidden-D-uqQF0z.js";import"./useLabels-BK_yTQcU.js";import"./useButton-v3-Q6iUD.js";import"./search-7Sa8Snop.js";import"./createLucideIcon-iD7jktQ6.js";import"./ClearButton-anqdkjVz.js";import"./Button-N-WvUv-N.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_jtq6xa.js";import"./VisuallyHidden-bxnSUgOY.js";import"./x-D7YsntyJ.js";import"./FieldError-nzuM8Mkm.js";import"./Text-Dm1It-3G.js";import"./Text-DYJP5A76.js";import"./RSPContexts-B3kcM3sq.js";import"./Collection-0h-PKilE.js";import"./index-CBtcg-XG.js";import"./DragAndDrop-BJ1ERuzN.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BdhRxb3C.js";import"./SelectionManager-DAuT0Dm6.js";import"./useEvent-CIz6tOnB.js";import"./useDescription-BQAUwCoM.js";import"./inertValue-E5_y9qi2.js";import"./useHighlightSelectionDescription-CZ656X4t.js";import"./useUpdateEffect-Bye21iy_.js";import"./ListKeyboardDelegate-DMbdK5-n.js";import"./useHasTabbableChild-Cpu7HCBc.js";import"./Checkbox-CBzHAYj4.js";import"./Form-DKSqMjyW.js";import"./check-BkVnLs9U.js";import"./useToggleState-C7hVXO0R.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
