import{r as m,f as l,j as t}from"./iframe-CdnIBaQS.js";import{S as d}from"./SearchField-CGhqpZJS.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DbQ4AkTB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BEJy-MfI.js";import"./utils-BGCpfP4A.js";import"./useLocalizedStringFormatter-Cr8jltsa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-c3TrDSBf.js";import"./useFocusRing-B26JkukS.js";import"./index-Bwdat55Z.js";import"./index-CjlGMBtV.js";import"./useFormValidation-CiZggeAv.js";import"./useField-B4Vh62Mt.js";import"./Button-BDoCnzr3.js";import"./Hidden-CJwsmdM9.js";import"./useLabels-DTSKd8To.js";import"./useButton-Cggmn0OU.js";import"./search-1QckFZbr.js";import"./createLucideIcon-KCWMli3b.js";import"./ClearButton-DVfJ8aAA.js";import"./Button-DHAriHpj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CVE7y_HC.js";import"./VisuallyHidden-D-XS7clw.js";import"./x-DD461jHE.js";import"./FieldError-BBRMXocd.js";import"./Text-63jd4RMf.js";import"./Text-C8pnIfab.js";import"./RSPContexts-BMRzhgaP.js";import"./Collection-DoWuqJ9n.js";import"./index-m2mBe-xg.js";import"./DragAndDrop-BDMLCXTP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BZfVsEb-.js";import"./SelectionManager--54cfGjY.js";import"./useEvent-BaBw_pLs.js";import"./useDescription-DeseOWEz.js";import"./inertValue-iGqYFqqc.js";import"./useHighlightSelectionDescription-C-K1tJlO.js";import"./useUpdateEffect-BhFdhiGD.js";import"./ListKeyboardDelegate-DfcwVj2G.js";import"./useHasTabbableChild-BnpHGzvY.js";import"./Checkbox-BQXjb4Sw.js";import"./Form-B1aKtSg3.js";import"./check-DoYXfMZv.js";import"./useToggleState-Cnm_II5z.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
