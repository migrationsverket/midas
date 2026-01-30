import{r as m,f as l,j as t}from"./iframe-BhyhdtXP.js";import{S as d}from"./SearchField-BMJfryv3.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cf6-OKkR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dx8jPu5Z.js";import"./utils-CGWlpFgY.js";import"./useLocalizedStringFormatter-DfMqiQIc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-0yybQNTL.js";import"./useFocusRing-CLgq8lqG.js";import"./index-B89a7HzS.js";import"./index-BOsuVa2L.js";import"./useFormValidation-DmOBSjg0.js";import"./useField-CaiZwujr.js";import"./Button-C9H7bBoo.js";import"./Hidden-BdJ24Yzp.js";import"./useLabels-5ZaQnqMS.js";import"./useButton-BdEoA23r.js";import"./search-C4Bdj6Pe.js";import"./createLucideIcon-Cz3c_aCr.js";import"./ClearButton-QA5O8Wid.js";import"./Button-RHoYggw3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D44WV7Rd.js";import"./VisuallyHidden-C-jWiPOY.js";import"./x-D8pCTRyw.js";import"./FieldError-DCeVhp7S.js";import"./Text-B-Mbjzpq.js";import"./Text-jDKA3oAD.js";import"./RSPContexts-pAilTGuB.js";import"./Collection-etEs1dki.js";import"./index-BWr0QrxI.js";import"./DragAndDrop-Bi5MlR6D.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CQlPeLkE.js";import"./SelectionManager-cqG52ld-.js";import"./useEvent-lYhLdKrQ.js";import"./useDescription-Dr1wl7PX.js";import"./inertValue-ldhtgSKC.js";import"./useHighlightSelectionDescription-DF73Njng.js";import"./useUpdateEffect-ofMRLXa5.js";import"./ListKeyboardDelegate-BuCzJAIh.js";import"./useHasTabbableChild-BV7xiQO7.js";import"./Checkbox-CW0uTy6F.js";import"./Form-it9E688f.js";import"./check-xqIrTCLK.js";import"./useToggleState-CGYuykgO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
