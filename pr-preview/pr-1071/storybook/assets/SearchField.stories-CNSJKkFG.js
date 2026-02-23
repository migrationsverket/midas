import{r as m,f as l,j as t}from"./iframe-cMEgXkU9.js";import{S as d}from"./SearchField-HeB9CfbS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CqSyPjEP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BX5yaqFT.js";import"./utils-B3lOSj3F.js";import"./useLocalizedStringFormatter-DBj2jYWp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkL4L2a3.js";import"./useFocusRing-CxXiz-Gm.js";import"./index-BmRYBJCP.js";import"./index-BMkS1cfA.js";import"./useFormValidation-BwIiM2rU.js";import"./useField-CD7C6WXD.js";import"./Button-yd3xuf6R.js";import"./Hidden-C5y8YolZ.js";import"./useLabels-CkaQlQl_.js";import"./useButton-BPJwIAj2.js";import"./search-j0cPPQiO.js";import"./createLucideIcon-DtfcjQlU.js";import"./ClearButton-C8FN5nk4.js";import"./Button-B1lVQr-S.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bd2ZBdeQ.js";import"./VisuallyHidden-ClFhsG2n.js";import"./x-CNFpAdsD.js";import"./FieldError-Cg9_4rDN.js";import"./Text-ltK-qi4B.js";import"./Text-oSal6G8w.js";import"./RSPContexts-B_AUN_Nr.js";import"./Collection-CqW90Kdu.js";import"./index-CISngLij.js";import"./DragAndDrop-Chkm0edy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-boBGA4vK.js";import"./SelectionManager-jeBnoHsp.js";import"./useEvent-CYCFwh_w.js";import"./useDescription-B3zABGFf.js";import"./inertValue-CyrGppkV.js";import"./useHighlightSelectionDescription-Bvj-iiCR.js";import"./useUpdateEffect-CIYSmzh-.js";import"./ListKeyboardDelegate-DgnZFSxp.js";import"./useHasTabbableChild-BdR-1uKb.js";import"./Checkbox-DsLyaLtK.js";import"./Form-DWqcZOfZ.js";import"./check-Bcd3u6yQ.js";import"./useToggleState-lgWPsxAB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
