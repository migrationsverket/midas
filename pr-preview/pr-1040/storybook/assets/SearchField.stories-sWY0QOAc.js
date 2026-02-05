import{r as m,f as l,j as t}from"./iframe-DdNBFEdS.js";import{S as d}from"./SearchField-Bl2LFqA1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BK7_lhea.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BJIZRVo5.js";import"./utils-DKBoBmKc.js";import"./useLocalizedStringFormatter-tAALMyF-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-UnscrmQh.js";import"./useFocusRing-C1ql2mMD.js";import"./index-Cy32Do-K.js";import"./index-B6M-MUl5.js";import"./useFormValidation-DHeKAkur.js";import"./useField-5xN0_EGG.js";import"./Button-BWr7_BWz.js";import"./Hidden-DdkFwnyL.js";import"./useLabels-CZmZ3erh.js";import"./useButton-CrvEZzSp.js";import"./search-CZLd9p39.js";import"./createLucideIcon-BK-2_1r2.js";import"./ClearButton-txBQFJPH.js";import"./Button-CStTwVWg.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ym1SGOkF.js";import"./VisuallyHidden-BmJ_BOK8.js";import"./x-BfdKHuCu.js";import"./FieldError-Dstr91Hq.js";import"./Text-DJzhksm2.js";import"./Text-Bgy8BGDZ.js";import"./RSPContexts-CKuuNJn4.js";import"./Collection-BHvAQsw5.js";import"./index-B0oHLev5.js";import"./DragAndDrop-DmJy_z5O.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BflNvleB.js";import"./SelectionManager-eDGBYmYv.js";import"./useEvent-CJ07A-z0.js";import"./useDescription-DS4J-thO.js";import"./inertValue-ByymKY4Z.js";import"./useHighlightSelectionDescription-D9nfUQh4.js";import"./useUpdateEffect-sRaxJt7Q.js";import"./ListKeyboardDelegate-Cy8Ry9Ez.js";import"./useHasTabbableChild-CJ0OT-TO.js";import"./Checkbox-BMqd6eFM.js";import"./Form-D13F7_ls.js";import"./check-BKlvlB_K.js";import"./useToggleState-CGDY6HqB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
