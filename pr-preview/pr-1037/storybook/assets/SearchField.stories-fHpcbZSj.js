import{r as m,f as l,j as t}from"./iframe-Bf2O8mTA.js";import{S as d}from"./SearchField-BHUtSoJt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CbtgNj3b.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4kZCJVJ.js";import"./utils-DvWeM8bD.js";import"./useLocalizedStringFormatter-DNn133Oj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBUs1YNw.js";import"./useFocusRing-CrmyRPT_.js";import"./index-BAN48Rrx.js";import"./index-C-cDut4b.js";import"./useFormValidation-BYxqhBck.js";import"./useField-BNnNMNgv.js";import"./Button-rJBUL80Z.js";import"./Hidden-Bayn64y7.js";import"./useLabels-CNHkh2me.js";import"./useButton-Cwz8dKkK.js";import"./search-B2IU-hxd.js";import"./createLucideIcon-DkEcA7M8.js";import"./ClearButton-B5iWWLhG.js";import"./Button-DqEB6TwE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D09nFlJw.js";import"./VisuallyHidden-BdseXYtF.js";import"./x-rPy8VafX.js";import"./FieldError-DmoCXSDp.js";import"./Text-Br20EZ_Y.js";import"./Text-C9gRZFsm.js";import"./RSPContexts-hwAw1TwI.js";import"./Collection-CvTBTnk3.js";import"./index-wKm3OkVX.js";import"./DragAndDrop-UgtpwwIP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BuSwNt_S.js";import"./SelectionManager-BtZRuM5E.js";import"./useEvent-BtnAi-yB.js";import"./useDescription-Dq7jvEgt.js";import"./inertValue-r2BaUb5C.js";import"./useHighlightSelectionDescription-CdeIQPaD.js";import"./useUpdateEffect-B7MSZtHN.js";import"./ListKeyboardDelegate-BxLtXsZO.js";import"./useHasTabbableChild-BQd4FoMP.js";import"./Checkbox-CGyEYq6N.js";import"./Form-DYo8KYF6.js";import"./check-DXEbxG8U.js";import"./useToggleState-BFLGlTr7.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
