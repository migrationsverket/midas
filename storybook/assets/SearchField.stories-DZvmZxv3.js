import{r as m,f as l,j as t}from"./iframe-CiqJOzxF.js";import{S as d}from"./SearchField-CQpYyJYU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BnW57ZU9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B5UnhFwk.js";import"./utils-0GsTBzJl.js";import"./useLocalizedStringFormatter-CIhkSn5J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZ_VAzGr.js";import"./useFocusRing-gGMqfhtg.js";import"./index-DrndIZWb.js";import"./index-CFgqDMnH.js";import"./useFormValidation-BHCltIgr.js";import"./useField-BKRlvos-.js";import"./Button-BXds3-7Z.js";import"./Hidden-CFvcIHES.js";import"./useLabels-BB9Q2rMv.js";import"./useButton-m7b0MM_h.js";import"./search-riaD11_5.js";import"./createLucideIcon-DT02zB1r.js";import"./ClearButton-Lh0t1XfK.js";import"./Button-CxRmwJHW.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CEHHKrhf.js";import"./VisuallyHidden-Tv_5dhqS.js";import"./x-zbQhWPRB.js";import"./FieldError-CwZpQUJo.js";import"./Text-Ch9Sljly.js";import"./Text-Dn4hqnjy.js";import"./RSPContexts-C0dEMWbh.js";import"./Collection-BizYL9zZ.js";import"./index-PGwKz-re.js";import"./DragAndDrop-BUt81l9B.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ChpEnvYL.js";import"./SelectionManager-Cs_75vrL.js";import"./useEvent-lRnGMY-c.js";import"./useDescription-CTOINnPD.js";import"./inertValue-UE4kHpuZ.js";import"./useHighlightSelectionDescription-DbjtX9KD.js";import"./useUpdateEffect-DWMgmur7.js";import"./ListKeyboardDelegate-DZDwGlUz.js";import"./useHasTabbableChild-D_U3g7vo.js";import"./Checkbox-ByYZPP4I.js";import"./Form-CRxifOsu.js";import"./check-Ci7kXBpi.js";import"./useToggleState-Dk-qrfKI.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
