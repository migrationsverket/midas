import{r as m,f as l,j as t}from"./iframe-DxANLnMg.js";import{S as d}from"./SearchField-UiVDjTLV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CAQgUB0R.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DzADzBNp.js";import"./utils-BQIgjTYG.js";import"./useLocalizedStringFormatter-BvGnbVVF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnIuUu55.js";import"./useFocusRing-Bfpm0Sir.js";import"./index-BPgjZc5C.js";import"./index-kmI4I0vE.js";import"./useFormValidation-yspdNVqG.js";import"./useField-DO8lpFvf.js";import"./Button-BgFZ3kti.js";import"./Hidden-OELWSN_z.js";import"./number-DfkVkf0F.js";import"./useLabels-B_4RNjuB.js";import"./useButton-CeQGViBo.js";import"./search-BrSA3CV5.js";import"./createLucideIcon-euW2jQkG.js";import"./ClearButton-C7uecFo6.js";import"./Button-ClCUxMP6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Nw5RAls2.js";import"./VisuallyHidden-Cp8jWSEw.js";import"./x-W8kckzsu.js";import"./FieldError-BHkzElcM.js";import"./Text-CUhbmYK5.js";import"./Text-DSJVLgNs.js";import"./RSPContexts-ZAcDkWoa.js";import"./Collection-D3aXl_fn.js";import"./index-Du53e8E2.js";import"./DragAndDrop-BRfWPoKK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DXKE19B6.js";import"./SelectionManager-DA9hPlC9.js";import"./useEvent-CngSPe2W.js";import"./useDescription-CStFSpFx.js";import"./inertValue-BBRh8Yq3.js";import"./useHighlightSelectionDescription-DLvMbxYY.js";import"./useUpdateEffect-BXZ_y4BT.js";import"./ListKeyboardDelegate-CzeV9cTc.js";import"./useHasTabbableChild-BikBTBxh.js";import"./Checkbox-BHue68Zd.js";import"./Form-4mfJGobF.js";import"./check-D0t1kPC9.js";import"./useToggleState-J9elSaHu.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
