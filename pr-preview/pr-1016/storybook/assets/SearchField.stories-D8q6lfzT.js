import{r as m,f as l,j as t}from"./iframe-Cy1O8yWi.js";import{S as d}from"./SearchField-Dsc6CG8l.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CRs9WSCn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CGXlN-Wm.js";import"./utils-BjVRslkV.js";import"./useLocalizedStringFormatter-Cv53LFTg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D4oWV2sN.js";import"./useFocusRing-Bp1jLS3U.js";import"./index-5ACCliHA.js";import"./index-Cyzr7w3M.js";import"./useFormValidation-JJdJbyT_.js";import"./useField-DKhAEfz8.js";import"./Button-D7uf2_z0.js";import"./Hidden-DfJC5d3o.js";import"./useLabels-BdY4SXxc.js";import"./useButton-MFlutIw_.js";import"./search-TersEAF4.js";import"./createLucideIcon-D6XDS7Dv.js";import"./ClearButton-BT7EZVx0.js";import"./Button-CD-tfith.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3W37BXaG.js";import"./VisuallyHidden-BDU5-Uv6.js";import"./x-DJ2qkTKw.js";import"./FieldError-CYJiMFhF.js";import"./Text-BhW5Vg2W.js";import"./Text-BQ9CxdIy.js";import"./RSPContexts-DYATOnMx.js";import"./Collection-DE8F0J6D.js";import"./index-D0lRM3EA.js";import"./DragAndDrop-4odexTmp.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcYJlAXq.js";import"./SelectionManager-B2hRycuL.js";import"./useEvent-BcfvInMW.js";import"./useDescription-dqHAgAeW.js";import"./inertValue-BDCHv1Ms.js";import"./useHighlightSelectionDescription-Dvnnpmmv.js";import"./useUpdateEffect-Cu2sT7yK.js";import"./ListKeyboardDelegate-0Mg55Vki.js";import"./useHasTabbableChild-BUzTtPen.js";import"./Checkbox-C8sL7oYZ.js";import"./Form-p9AgarO5.js";import"./check-YHeCWuqu.js";import"./useToggleState-BcE9R_VW.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
