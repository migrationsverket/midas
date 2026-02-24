import{r as m,f as l,j as t}from"./iframe-AKYLQdCk.js";import{S as d}from"./SearchField-DTW1CUQW.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-k8PmAYRG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CbVlXO0V.js";import"./useObjectRef-C1ZIljv5.js";import"./useLocalizedStringFormatter-BLFXCP_p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D-NwfPmo.js";import"./useFocusRing-DeUGGThd.js";import"./useFocusable-CTBL5lAM.js";import"./index-Bv5J06q2.js";import"./index-DH60KLGl.js";import"./useFormValidation-Co9GPZZz.js";import"./useField-z_fBkLit.js";import"./Button-DFNriVHD.js";import"./utils-CwZ2LlQC.js";import"./Hidden-BaKtfQaU.js";import"./number-DfkVkf0F.js";import"./useLabels-DwGxuFNn.js";import"./useButton-I-1qHytb.js";import"./search-Cvmlc1UJ.js";import"./createLucideIcon-DaHUv1OG.js";import"./ClearButton-CFh_Dllg.js";import"./Button-DI1yGBch.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAqHm93j.js";import"./VisuallyHidden-BjOFadh9.js";import"./x-D3UjfguG.js";import"./FieldError-1z-h802J.js";import"./Text-Bn-0i142.js";import"./Text-BwqwIWKs.js";import"./RSPContexts-DNK6gf8O.js";import"./Collection-3ml14O5b.js";import"./CollectionBuilder-looNesjp.js";import"./index-Blg7ZGdj.js";import"./DragAndDrop-CUDypF4N.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DO0fqmNQ.js";import"./SelectionManager-BucojQKK.js";import"./useEvent-C0_2xWEm.js";import"./useDescription-CBo5mlE7.js";import"./inertValue-CpkUqF4y.js";import"./useHighlightSelectionDescription-CL8ZZ7dF.js";import"./useUpdateEffect-B0qXsQa3.js";import"./ListKeyboardDelegate-CiGgAhDI.js";import"./useHasTabbableChild-DSpamXps.js";import"./Checkbox-B8iNUYXj.js";import"./Form-BMSgrWJv.js";import"./check-D-Bz2LBY.js";import"./useToggleState-D6tDC9zB.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
