import{r as m,f as l,j as t}from"./iframe-CROn2D2x.js";import{S as d}from"./SearchField-CtSberpt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BXvb5rHG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bvh10bMV.js";import"./utils-BmCdB7DC.js";import"./useLocalizedStringFormatter-B4be551O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSeCUWcb.js";import"./useFocusRing-DbrQCD6u.js";import"./index-BApTSzNb.js";import"./index-CojDe_Mf.js";import"./useFormValidation-CuSVA-Sh.js";import"./useField-BAp4yqKh.js";import"./Button-rTy-r-bM.js";import"./Hidden-B4kaJ98v.js";import"./useLabels-B2-lRjdq.js";import"./useButton-CtKtHL67.js";import"./search-CP3XmSgF.js";import"./createLucideIcon-BBVnxcWo.js";import"./ClearButton-CTQ5X7NW.js";import"./Button-tcUqF5wD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDmjJZHt.js";import"./VisuallyHidden-BHGp5XeR.js";import"./x-BxhX1Y1g.js";import"./FieldError-DOqGfxSh.js";import"./Text-m0OBBvo5.js";import"./Text-p_fXYEUj.js";import"./RSPContexts-BXOPS_Ee.js";import"./Collection-DxKKFJjX.js";import"./index-BoGcMoi7.js";import"./DragAndDrop-DZ9y1iS3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CeR5295T.js";import"./SelectionManager-D69MLAoG.js";import"./useEvent-CCZ-8-DW.js";import"./useDescription-D384wrOJ.js";import"./inertValue-BBU8Q_l0.js";import"./useHighlightSelectionDescription-DR1NxynZ.js";import"./useUpdateEffect-BYGy_QTQ.js";import"./ListKeyboardDelegate-DOS933sq.js";import"./useHasTabbableChild-BxRgSH0X.js";import"./Checkbox-BgOaTELp.js";import"./Form--WL6IsSv.js";import"./check-CRwQC0VZ.js";import"./useToggleState-BN7j948d.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
