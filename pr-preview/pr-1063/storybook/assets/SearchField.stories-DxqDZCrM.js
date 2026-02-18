import{r as m,f as l,j as t}from"./iframe-Bt2IPdm_.js";import{S as d}from"./SearchField-Bp4BpGWb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-tlq8Bl1c.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CVrvGgqI.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CHQWAa9G.js";import"./utils-C3T3ztzp.js";import"./useLocalizedStringFormatter-Dq04GxHG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ckkBpHVX.js";import"./useFocusRing-DkE8kJUj.js";import"./index-BDiIIlI6.js";import"./index-CN1OBmgy.js";import"./useFormValidation-EZHxDImy.js";import"./useField-CQxFKP7h.js";import"./Button-C79FTkxg.js";import"./Hidden--XR3ujDb.js";import"./useLabels-CUKIRIlp.js";import"./useButton-CWjFkamK.js";import"./search-YuFVPDkm.js";import"./createLucideIcon-CLpn3Yea.js";import"./ClearButton-D9hrdXur.js";import"./Button-CLF5zjXA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-yIeft2Rj.js";import"./VisuallyHidden-B4zsPLSx.js";import"./x-BDjWDO9M.js";import"./FieldError-DsVwS6sU.js";import"./Text-4gkk9B6S.js";import"./Text-sG9oy4ZT.js";import"./RSPContexts-D7GX16CF.js";import"./Collection-IHp_di3t.js";import"./index-yOO_3eVZ.js";import"./DragAndDrop-LbCCi2Sz.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DJI9OpIi.js";import"./SelectionManager-CnZMajYP.js";import"./useEvent-DjOTsNLO.js";import"./useDescription-COVCGZbr.js";import"./inertValue-CJCAIwZn.js";import"./useHighlightSelectionDescription-BNy_NIf-.js";import"./useUpdateEffect-D0IKf29K.js";import"./ListKeyboardDelegate-CK6HBViI.js";import"./useHasTabbableChild-DU1IekZf.js";import"./Checkbox-DGEb-Nzu.js";import"./Form-C_E-_4AJ.js";import"./check-C2NMiBIm.js";import"./useToggleState-CAhxU4d5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
